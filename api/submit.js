// Vercel Serverless Function - 설문 데이터 저장
// Supabase를 사용하여 데이터를 저장합니다.

import { createClient } from '@supabase/supabase-js';

// 환경 변수에서 Supabase 설정 가져오기
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export default async function handler(req, res) {
    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONS 요청 처리 (CORS preflight)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // POST 요청만 허용
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;

        // 데이터 유효성 검사
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ error: 'No data provided' });
        }

        // Supabase 클라이언트 생성
        if (!supabaseUrl || !supabaseKey) {
            console.error('Supabase credentials not configured');
            // Supabase 설정이 없으면 로그만 남기고 성공 응답
            console.log('Survey response received:', JSON.stringify(data, null, 2));
            return res.status(200).json({ 
                success: true, 
                message: 'Data logged (Supabase not configured)' 
            });
        }

        const supabase = createClient(supabaseUrl, supabaseKey);

        // 데이터 저장
        const { error } = await supabase
            .from('survey_responses')
            .insert([{
                response_data: data,
                created_at: new Date().toISOString()
            }]);

        if (error) {
            console.error('Supabase insert error:', error);
            return res.status(500).json({ error: 'Failed to save data' });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Survey response saved successfully' 
        });

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
