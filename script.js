// ===== 설문 문항 데이터 =====

// Part 2: 한국인 종교성 척도 (33문항)
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
    "나는 어려운 사람을 돕고자 한다."
];

// Part 3: 경험적 차원 (16문항)
const part3Questions = [
    "나는 초월적 존재(신, 부처님, 절대자 등)가 나와 함께 한다고 느낀 적이 있다.",
    "나는 종교 활동(예배, 법회, 미사, 기도, 명상 등) 중에 초월적 존재의 현존을 느낀 적이 있다.",
    "나는 일상생활에서 초월적 존재가 나를 지켜보고 있다고 느낀다.",
    "나는 혼자 있을 때에도 초월적 존재와 함께 있다는 느낌을 받은 적이 있다.",
    "나는 기도나 명상을 통해 초월적 존재와 소통한다고 느낀 적이 있다.",
    "나는 기도나 명상이 응답받았다고 느낀 적이 있다.",
    "나는 중요한 결정을 할 때 초월적 존재의 인도하심을 느낀 적이 있다.",
    "나는 종교 활동을 통해 초월적 존재로부터 위로를 받은 적이 있다.",
    "나는 종교 활동 중에 깊은 내적 평화를 경험한 적이 있다.",
    "나는 종교 활동을 통해 마음이 충만해지는 기쁨을 느낀 적이 있다.",
    "나는 종교 활동 후에 감사함이 넘치는 경험을 한 적이 있다.",
    "나는 종교 활동을 통해 근심과 걱정이 사라지는 경험을 한 적이 있다.",
    "나는 자연이나 우주를 보며 나를 넘어서는 거대한 존재를 느낀 적이 있다.",
    "나는 종교 활동 중에 일상적인 나를 벗어나는 경험을 한 적이 있다.",
    "나는 모든 존재가 하나로 연결되어 있다는 느낌을 받은 적이 있다.",
    "나는 말로 표현하기 어려운 신비로운 경험을 한 적이 있다."
];

// Part 4: 지적 차원 (16문항)
const part4Questions = [
    "나는 내가 믿는 종교의 핵심 가르침이 무엇인지 알고 있다.",
    "나는 내가 믿는 종교가 삶의 의미에 대해 어떻게 가르치는지 이해한다.",
    "나는 내가 믿는 종교의 윤리적 가르침이 무엇인지 알고 있다.",
    "나는 다른 사람에게 내 종교의 핵심 가르침을 설명할 수 있다.",
    "나는 내가 믿는 종교의 경전(성경, 불경, 성서 등)의 주요 내용을 알고 있다.",
    "나는 경전에 나오는 주요 인물이나 이야기를 알고 있다.",
    "나는 경전의 가르침을 일상생활에 어떻게 적용해야 하는지 이해한다.",
    "나는 경전을 읽고 그 의미를 이해할 수 있다.",
    "나는 종교 의식(예배, 법회, 미사 등)의 순서와 의미를 알고 있다.",
    "나는 종교적 상징물(십자가, 불상, 성모상 등)의 의미를 알고 있다.",
    "나는 종교 절기나 기념일의 의미를 알고 있다.",
    "나는 종교 의식에서 사용되는 용어나 표현의 뜻을 이해한다.",
    "나는 내 종교에 대해 더 알고 싶어서 책이나 자료를 찾아본다.",
    "나는 종교 교육 프로그램(성경공부, 불교대학, 교리교육 등)에 참여한 적이 있다.",
    "나는 내 종교의 역사나 전통에 대해 관심이 있다.",
    "나는 종교적 주제에 대해 다른 사람들과 대화하는 것을 좋아한다."
];

// Part 5: 내재적/외재적 종교 성향 (20문항)
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
    "종교 모임에 참석하는 것은 대부분 즐거운 사회적 활동이다."
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

// Part 7: 삶의 만족도 (5문항, 7점 척도)
const part7Questions = [
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
const totalSections = 9; // intro + 7 parts + complete
let surveyData = {};

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', function() {
    generateQuestions();
    updateProgress();
});

// ===== 문항 동적 생성 =====
function generateQuestions() {
    // Part 2
    generateLikertQuestions('part2-questions', part2Questions, 'p2', 5, 1);
    
    // Part 3
    generateLikertQuestions('part3-questions', part3Questions, 'p3', 5, 34);
    
    // Part 4
    generateLikertQuestions('part4-questions', part4Questions, 'p4', 5, 50);
    
    // Part 5
    generateLikertQuestions('part5-questions', part5Questions, 'p5', 5, 66);
    
    // Part 6 (9점 척도)
    generateLikertQuestions('part6-questions', part6Questions, 'p6', 9, 86);
    
    // Part 7 (7점 척도)
    generateLikertQuestions('part7-questions', part7Questions, 'p7', 7, 98);
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
        if (scalePoints === 5) {
            scaleLabels = ['전혀\n아니다', '아니다', '보통', '그렇다', '매우\n그렇다'];
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
        // 마지막 설문 페이지
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
        // 실제 설문 부분 계산 (Part 1 ~ Part 7 = 7개)
        const surveyParts = 7;
        const completedParts = currentSection; // currentSection 1 = Part 1 완료 중
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
        // Part 2~7: 모든 문항 그룹에서 라디오 버튼 검사
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
