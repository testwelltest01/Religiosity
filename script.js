// ===== 설문 문항 데이터 =====

// Part 2: 한국인 종교성 척도 (34문항)
// 논문 Table 8 기준 34문항 
const part2Questions = [
    "나는 신앙생활(종교생활)을 열심히 한다.",
    "나는 종교 모임(예배, 법회, 미사 등)에 성실하게 참석한다.",
    "나는 영적인 활동(기도, 명상, 묵상 등)을 자주 한다.",
    "나는 종교 단체에서 맡은 역할(직분)이 있다.",
    "나는 종교 단체에 헌금(보시, 헌금 등)을 한다.",
    "나는 내세(천국, 극락, 사후세계 등)에 대한 소망이 있다.",
    "나는 신(하나님, 부처님, 절대자 등)의 뜻에 따라 살려고 노력한다.",
    "나는 종교적 가르침을 삶에 적용하려고 한다.",
    "나는 삶의 목표를 분명하게 가지고 있다.",
    "나는 삶의 의미를 찾으려고 노력한다.",
    "나는 미래에 대한 희망을 가지고 있다.",
    "나는 어려운 상황에서도 긍정적으로 생각하려고 한다.",
    "나는 내가 해야 할 일에 최선을 다한다.",
    "나는 자기 발전을 위해 노력한다.",
    "나는 다른 사람을 존중한다.",
    "나는 겸손하려고 노력한다.",
    "나는 다른 사람의 입장을 이해하려고 한다.",
    "나는 다른 사람에게 친절하게 대한다.",
    "나는 남을 배려하는 마음을 가지고 있다.",
    "나는 가족을 소중하게 여긴다.",
    "나는 가족과 화목하게 지내려고 노력한다.",
    "나는 가족에게 사랑을 표현한다.",
    "나는 가족의 행복을 위해 노력한다.",
    "나는 가족 간의 대화를 중요하게 생각한다.",
    "나는 경제적으로 성공하고 싶다.",
    "나는 물질적으로 풍요롭게 살고 싶다.",
    "나는 사회적으로 인정받고 싶다.",
    "나는 좋은 직업을 갖고 싶다.",
    "나는 다른 사람들과 잘 어울린다.",
    "나는 사람들과 좋은 관계를 유지하려고 노력한다.",
    "나는 새로운 사람을 만나는 것을 좋아한다.",
    "나는 모임 활동에 적극적으로 참여한다.",
    "나는 어려운 사람을 돕고자 한다.",
    "[누락된 문항 34번: 척도 원본을 확인하여 내용을 채워주세요]" 
];

// Part 3: 경험적 차원 (8문항) - 신규 개발
// 논문 Table 7 기준 
const part3Questions = [
    "나는 신성하거나 초월적인 존재의 임재를 느낀다.",
    "나는 종교 생활을 통해 내면의 평화를 경험한다.",
    "나는 일상생활에서 신성함이나 거룩함을 느낄 때가 있다.",
    "나는 자연이나 예술, 타인을 통해 경외감이나 감동을 느낀다.",
    "나는 종교 활동(예배, 기도, 명상 등)을 할 때 위안을 받는다.",
    "나는 신성한 존재가 나의 삶을 인도하거나 보호한다고 느낀다.",
    "나는 종교를 통해 삶의 방향이나 가치관이 크게 변화한 경험이 있다.",
    "나는 종교 경험을 통해 깊은 깨달음이나 확신을 얻은 적이 있다."
];

// Part 4: 지적 차원 (8문항) - 신규 개발
// 논문 Table 7 기준 
const part4Questions = [
    "나는 내가 믿는 종교가 가르치는 핵심 내용을 이해하고 있다.",
    "나는 내가 믿는 종교가 추구하는 이상이나 목표를 알고 있다.",
    "나는 내가 믿는 종교가 인간과 세계를 어떻게 설명하는지 이해한다.",
    "나는 내가 믿는 종교의 경전이나 주요 가르침에 대해 알고 있다.",
    "나는 내가 믿는 종교의 역사나 전통에 대해 어느 정도 알고 있다.",
    "나는 내가 행하는 종교 의례(예배, 법회, 미사 등)의 의미를 이해하고 있다.",
    "나는 내가 믿는 종교가 권장하는 실천 방법이나 생활 방식을 알고 있다.",
    "나는 삶의 중요한 결정을 할 때 종교적 가르침을 참고한다."
];

// Part 5: 내재적/외현적 종교 성향 (26문항)
// 논문 Table 8 기준 26문항 
const part5Questions = [
    "나는 종교를 삶의 모든 영역에 적용하려고 노력한다.",
    "나의 종교적 신념은 삶에 대한 내 모든 접근 방식의 기초이다.",
    "나에게 기도(명상)는 매우 중요하다.",
    "나는 신앙 없이는 살 수 없을 것 같다.",
    "종교가 나에게 가장 큰 의미를 주는 것은 하루 종일 나와 함께한다는 것이다.",
    "나의 종교적 신념이 없다면 나의 삶 전체가 완전히 달라질 것이다.",
    "나는 종종 나의 종교적 신념에 대한 강한 확신을 느낀다.",
    "나는 신앙에 따라 살고자 최선을 다한다.",
    "어떤 다른 것보다도 나의 종교가 가장 중요하다.",
    "종교 모임은 좋은 사회적 관계를 형성하는 데 가장 중요하다.",
    "종교가 나에게 제공하는 가장 큰 것은 슬픔과 불행이 닥칠 때의 위안이다.",
    "종교 모임에 참석하는 한 가지 이유는 내 지역사회에서 좋은 이웃이 되는 데 도움이 되기 때문이다.",
    "나는 주로 종교 의식(예배, 법회, 미사 등)에 참석할 때만 기도(명상)한다.",
    "때때로 나의 종교적 신념을 타협하여 사회적, 경제적 이익을 보호해야 할 필요가 있다.",
    "내가 종교 모임에 참석하는 주된 목적은 친구들을 만나기 위해서이다.",
    "나의 종교가 무엇인지는 중요하지 않다. 중요한 것은 도덕적 삶을 사는 것이다.",
    "종교의 주된 목적은 좋은 친구를 사귀는 것이다.",
    "비록 나는 종교적인 사람이지만, 세속적인 고려가 내 삶에 영향을 미치도록 허용하지 않는다.",
    "나는 종교 모임에 참석하는데, 그것이 나의 사업 발전에 도움이 되기 때문이다.",
    "종교 모임에 참석하는 것은 대부분 즐거운 사회적 활동이다.",
    "[추가 문항 21: Allport & Ross 척도 원본 확인 필요]",
    "[추가 문항 22: Allport & Ross 척도 원본 확인 필요]",
    "[추가 문항 23: Allport & Ross 척도 원본 확인 필요]",
    "[추가 문항 24: Allport & Ross 척도 원본 확인 필요]",
    "[추가 문항 25: Allport & Ross 척도 원본 확인 필요]",
    "[추가 문항 26: Allport & Ross 척도 원본 확인 필요]"
];

// Part 6: Quest 척도 (12문항, 9점 척도)
const part6Questions = [
    "나는 내 삶의 의미와 목적에 대한 질문을 하기 시작할 때까지 종교에 큰 관심이 없었다.",
    "내 삶의 경험들이 나로 하여금 종교적 신념을 재고하게 했다.",
    "비극은 내 종교적 신념을 바꾸게 만들었다.",
    "나는 종교적 의심과 불확실성을 소중히 여긴다고 할 수 있다.",
    "질문이 답보다 내 종교적 경험에 더 중심적이다.",
    "나는 진정으로 종교적이 되려면 종교적 가르침에 의문을 품어야 한다고 생각한다.",
    "내가 성장하고 변화함에 따라, 나의 종교도 성장하고 변화할 것으로 기대한다.",
    "나는 끊임없이 내 종교적 신념에 의문을 제기한다.",
    "나에게 종교적 의심은 성장의 표현이었다.",
    "종교적 질문에 대한 단순한 답은 없다.",
    "나는 삶의 복잡성이 종교적으로 단순한 답을 불가능하게 한다고 생각한다.",
    "내가 종교에 대해 확실하게 말할 수 있는 것은 아직 탐색 중이라는 것이다."
];

// Part 7: 영적 안녕 척도 (20문항, 6점 척도)
// 논문 Table 8 기준 [cite: 294]
const part7Questions = Array.from({length: 20}, (_, i) => `영적 안녕 척도 문항 ${i + 1} (Paloutzian & Ellison, 1982 원본 내용을 입력하세요)`);

// Part 8: 우울 척도 (CES-D) (10문항, 4점 척도)
// 논문 Table 8 기준 [cite: 296]
const part8Questions = Array.from({length: 10}, (_, i) => `우울 척도 문항 ${i + 1} (지난 일주일 동안... Radloff, 1977 원본 내용을 입력하세요)`);

// Part 9: 삶의 만족도 (5문항, 7점 척도)
// 논문 Table 8 기준 [cite: 297]
const part9Questions = [
    "대체로 나의 삶은 내가 이상적으로 여기는 삶에 가깝다.",
    "나의 삶의 조건은 아주 좋은 편이다.",
    "나는 나의 삶에 만족한다.",
    "지금까지 나는 내가 원하는 중요한 것들을 이루어 왔다.",
    "만약 내가 인생을 다시 산다고 해도, 나는 거의 아무것도 바꾸지 않을 것이다."
];

// Part 1의 필수 질문 목록
const part1RequiredQuestions = ['gender', 'age', 'education', 'religion', 'religion_duration', 'religion_frequency'];

// ===== 전역 변수 =====
let currentSection = 0;
// Intro(1) + Parts(9) + Complete(1) = 11개 섹션
const totalSections = 11; 
let surveyData = {};

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', function() {
    generateQuestions();
    updateProgress();
});

// ===== 문항 동적 생성 =====
function generateQuestions() {
    // 문항 번호 시작점 계산
    // Part 2: 1~34
    // Part 3: 35~42
    // Part 4: 43~50
    // Part 5: 51~76
    // Part 6: 77~88
    // Part 7: 89~108
    // Part 8: 109~118
    // Part 9: 119~123
    
    // Part 2 (5점)
    generateLikertQuestions('part2-questions', part2Questions, 'p2', 5, 1);
    
    // Part 3 (5점) - 신규
    generateLikertQuestions('part3-questions', part3Questions, 'p3', 5, 35);
    
    // Part 4 (5점) - 신규
    generateLikertQuestions('part4-questions', part4Questions, 'p4', 5, 43);
    
    // Part 5 (5점)
    generateLikertQuestions('part5-questions', part5Questions, 'p5', 5, 51);
    
    // Part 6 (9점)
    generateLikertQuestions('part6-questions', part6Questions, 'p6', 9, 77);

    // Part 7 (6점) - 영적 안녕
    generateLikertQuestions('part7-questions', part7Questions, 'p7', 6, 89);

    // Part 8 (4점) - 우울 (CES-D는 0~3점이지만 여기선 편의상 1~4로 매핑하거나 라벨 조정 필요. 
    // 여기서는 generateLikertQuestions가 1부터 시작하므로 1~4로 생성하고 라벨을 매핑합니다)
    generateLikertQuestions('part8-questions', part8Questions, 'p8', 4, 109);
    
    // Part 9 (7점) - 삶의 만족도
    generateLikertQuestions('part9-questions', part9Questions, 'p9', 7, 119);
}

function generateLikertQuestions(containerId, questions, prefix, scalePoints, startNumber) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    questions.forEach((question, index) => {
        const questionNumber = startNumber + index;
        const questionName = `${prefix}_q${index + 1}`;
        
        const questionGroup = document.createElement('div');
        questionGroup.className = 'question-group';
        questionGroup.setAttribute('data-question', questionName);
        
        let scaleLabels = [];
        // 척도별 라벨 정의
        if (scalePoints === 4) {
            // CES-D (0~3점) -> UI에서는 1~4번 선택지로 표시하되 라벨은 빈도
            scaleLabels = ['극히\n드물게', '가끔', '종종', '대부분'];
        } else if (scalePoints === 5) {
            scaleLabels = ['전혀\n아니다', '아니다', '보통', '그렇다', '매우\n그렇다'];
        } else if (scalePoints === 6) {
            // 영적 안녕 (1~6점)
            scaleLabels = ['전혀\n반대', '반대', '다소\n반대', '다소\n동의', '동의', '강하게\n동의'];
        } else if (scalePoints === 7) {
            scaleLabels = ['전혀', '', '', '보통', '', '', '매우'];
        } else if (scalePoints === 9) {
            scaleLabels = ['전혀', '', '', '', '보통', '', '', '', '매우'];
        }
        
        let likertHTML = `
            <label class="question-label">
                <span class="q-number">${questionNumber}</span>
                ${question}
            </label>
            <div class="likert-scale">
        `;
        
        for (let i = 1; i <= scalePoints; i++) {
            const label = scaleLabels[i - 1] || '';
            // 4점 척도(CES-D)의 경우 값은 0~3으로 저장하고 싶을 수 있으나, 
            // 통일성을 위해 여기선 1~4로 저장하고 분석 시 변환 권장.
            likertHTML += `
                <div class="likert-option">
                    <input type="radio" name="${questionName}" value="${i}" id="${questionName}_${i}">
                    <label for="${questionName}_${i}">
                        <span class="likert-number">${i}</span>
                        <span class="likert-text">${label}</span>
                    </label>
                </div>
            `;
        }
        
        likertHTML += '</div>';
        questionGroup.innerHTML = likertHTML;
        container.appendChild(questionGroup);
    });
}

// ===== 섹션 네비게이션 =====
function startSurvey() {
    currentSection = 1;
    showSection(currentSection);
    updateNavButtons();
    updateProgress();
}

function nextSection() {
    if (!validateCurrentSection()) {
        return;
    }
    
    saveCurrentSectionData();
    
    if (currentSection < totalSections - 1) {
        currentSection++;
        showSection(currentSection);
        updateNavButtons();
        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevSection() {
    if (currentSection > 1) {
        currentSection--;
        showSection(currentSection);
        updateNavButtons();
        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showSection(index) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (currentSection === 0) {
        // 인트로 페이지
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'none';
    } else if (currentSection === totalSections - 1) {
        // 완료 페이지
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'none';
    } else if (currentSection === totalSections - 2) {
        // 마지막 설문 페이지 (Part 9)
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
}

// ===== 진행률 업데이트 =====
function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    
    let percent = 0;
    
    if (currentSection === 0) {
        // 인트로
        percent = 0;
    } else if (currentSection === totalSections - 1) {
        // 완료 페이지 - 100% 표시
        percent = 100;
    } else {
        // 실제 설문 부분 계산 (Part 1 ~ Part 9 = 9개)
        const surveyParts = 9;
        const completedParts = currentSection; 
        percent = Math.round((completedParts / surveyParts) * 100);
        // 최대 99%까지 (완료 전)
        percent = Math.min(percent, 99);
    }
    
    progressBar.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
}

// ===== 유효성 검사 =====
function validateCurrentSection() {
    const currentSectionEl = document.querySelector('.section.active');
    if (!currentSectionEl) return true;
    
    // 에러 표시 초기화
    currentSectionEl.querySelectorAll('.question-group.error').forEach(el => {
        el.classList.remove('error');
    });
    currentSectionEl.querySelectorAll('input.error').forEach(el => {
        el.classList.remove('error');
    });
    
    let firstError = null;
    
    // Part 1 검사 (인구통계학적 정보)
    if (currentSection === 1) {
        for (const questionName of part1RequiredQuestions) {
            if (questionName === 'age') {
                // 나이 입력 검사
                const ageInput = currentSectionEl.querySelector('input[name="age"]');
                if (!ageInput.value.trim()) {
                    const questionGroup = ageInput.closest('.question-group');
                    questionGroup.classList.add('error');
                    ageInput.classList.add('error');
                    if (!firstError) firstError = questionGroup;
                }
            } else {
                // 라디오 버튼 검사
                const radioInputs = currentSectionEl.querySelectorAll(`input[name="${questionName}"]`);
                const isChecked = Array.from(radioInputs).some(input => input.checked);
                if (!isChecked) {
                    const questionGroup = currentSectionEl.querySelector(`[data-question="${questionName}"]`);
                    if (questionGroup) {
                        questionGroup.classList.add('error');
                        if (!firstError) firstError = questionGroup;
                    }
                }
            }
        }
    } else {
        // Part 2~9: 모든 문항 그룹에서 라디오 버튼 검사
        const questionGroups = currentSectionEl.querySelectorAll('.question-group[data-question]');
        
        questionGroups.forEach(group => {
            const questionName = group.getAttribute('data-question');
            const radioInputs = group.querySelectorAll(`input[type="radio"][name="${questionName}"]`);
            
            if (radioInputs.length > 0) {
                const isChecked = Array.from(radioInputs).some(input => input.checked);
                if (!isChecked) {
                    group.classList.add('error');
                    if (!firstError) firstError = group;
                }
            }
        });
    }
    
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.classList.add('shake');
        setTimeout(() => {
            firstError.classList.remove('shake');
        }, 500);
        showToast('모든 문항에 응답해 주세요.', 'error');
        return false;
    }
    
    return true;
}

// ===== 데이터 저장 =====
function saveCurrentSectionData() {
    const currentSectionEl = document.querySelector('.section.active');
    if (!currentSectionEl) return;
    
    const inputs = currentSectionEl.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type === 'radio' && input.checked) {
            surveyData[input.name] = input.value;
        } else if (input.type === 'number' || input.type === 'text') {
            if (input.value.trim()) {
                surveyData[input.name] = input.value.trim();
            }
        }
    });
}

// ===== 설문 제출 =====
async function submitSurvey() {
    if (!validateCurrentSection()) {
        return;
    }
    
    saveCurrentSectionData();
    
    // 타임스탬프 추가
    surveyData.submitted_at = new Date().toISOString();
    surveyData.user_agent = navigator.userAgent;
    
    showLoading(true);
    
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(surveyData)
        });
        
        if (response.ok) {
            currentSection = totalSections - 1;
            showSection(currentSection);
            updateNavButtons();
            updateProgress(); // 100%로 업데이트
            showToast('설문이 성공적으로 제출되었습니다!', 'success');
        } else {
            throw new Error('제출 실패');
        }
    } catch (error) {
        console.error('Submit error:', error);
        // 오프라인 저장 (localStorage)
        saveToLocalStorage();
        showToast('네트워크 오류가 발생했습니다. 응답이 로컬에 저장되었습니다.', 'error');
        
        // 그래도 완료 페이지로 이동
        currentSection = totalSections - 1;
        showSection(currentSection);
        updateNavButtons();
        updateProgress(); // 100%로 업데이트
    } finally {
        showLoading(false);
    }
}

// ===== 로컬 저장소 백업 =====
function saveToLocalStorage() {
    const savedResponses = JSON.parse(localStorage.getItem('surveyResponses') || '[]');
    savedResponses.push(surveyData);
    localStorage.setItem('surveyResponses', JSON.stringify(savedResponses));
}

// ===== 로딩 표시 =====
function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (show) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// ===== 토스트 메시지 =====
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== 키보드 접근성 =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        const activeSection = document.querySelector('.section.active');
        if (activeSection && currentSection > 0 && currentSection < totalSections - 1) {
            // Enter 키로 다음 섹션 이동 방지 (실수 방지)
        }
    }
});