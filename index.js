// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    { "number": 1, "message": "문원희교수님 안녕하세요.😀 정말 오랜만에 연락드리죠?" },
    { "number": 2, "message": "벌써 크리스마스🎄가 다가오네요." },
    { "number": 3, "message": " 크리스마스를 기다리며 보실 어드벤트 캘린더📅를 준비해봤어요." },
    { "number": 4, "message": "캘린더 안에 나오는 사진과 알파벳을 조합하여 답을 카톡으로 보내주시면 선물🎁을 보내드려요!" },
    { "number": 5, "message": "답이 무엇인지 아셨다면 언제든지 고민 없이 카톡을 보내주세요. " },
    { "number": 6, "message": "기다리고 있을게요..!! 부담 가지지 마시고 꼭 보내주세요~" },
    { "number": 7, "message": "산타🎅는 바쁘실테니 저희가 산타를 대신해서 선물을 드릴게요." },
    { "number": 8, "message": "참고로..! 혹시 캘린더 아래쪽에 배경음악🎵이 있다는 것을 알아 차리셨나요? 배경음악은 다솔의 연주🎻를 녹음한거에요~" },
    { "number": 9, "message": "가을이 되서도 그렇게 덥더니 갑자기 날이 많이 추워졌어요.❄" },
    { "number": 10, "message": "혹시 건강은 괜찮으세요?" },
    { "number": 11, "message": "건강도 마음도 항상 따뜻하셨으면 좋겠어요.☕" },
    { "number": 12, "message": "1년 동안 행복한 한 해가 되셨길 바라요.🙏" },
    { "number": 13, "message": "저희는 교수님이라는 존재만으로 큰 힘💪을 얻어 잘 지내고 있어요." },
    {
        "number": 14, "message": "항상 저희를 응원해주신 덕분에 좋은 일들이 생긴 것 같아요🍀."
    },
    {
        "number": 15, "message": "언제나 저희를 기억해주고, 시간 되실 때마다 함께 시간을 보내주셔서 감사드려요.😍"
    },
    {
        "number": 16, "message": "올해는 더 자주 못 만나서 무척이나 아쉬웠어요.😭"
    },
    {
        "number": 17, "message": "교수님께 감사한 마음을 크리스마스라는 기회로 표현하고 싶은데 잘 전달 될지 모르겠네요.😅"
    },
    {
        "number": 18, "message": "저희는 크리스마스라서 설레는 마음, 교수님께 예쁜 분위기로 연락할 수 있어 기뻐요.😁"
    },
    {
        "number": 19, "message": "올 해 좋은 날도 나쁜 날도 있으셨겠지만 크리스마스 만큼은 교수님께서 가장 행복한 날이길.."
    },
    { "number": 20, "message": "좋아하는 이유가 있으면 존경, 좋아하는 이유가 없으면 사랑❤이래요." },
    { "number": 21, "message": "저희는 교수님을 좋아하는 이유가 있으면서도 없어요♡" },
    {
        "number": 22, "message": "혹시나..정답을 아직 모르신다면 힌트: 바사삭 소리가 나고, 기분 좋은 글귀가 적혀 있어요!"
    },
    { "number": 23, "message": "메리크리스마스!⛄" },
    { "number": 24, "message": "" },
];