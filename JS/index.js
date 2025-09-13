// 네비게이션 전체 영역과 슬라이드 컨테이너를 선택
const nav = document.querySelector('#nav');
const slidesContainer = document.querySelector('.slides');
// 모든 메인 메뉴(.cafe)를 유사 배열에서 진짜 배열로 변환 (index를 찾기 위해)
const navItems = Array.from(document.querySelectorAll('#nav .cafe'));

// 네비게이션 영역 전체에 클릭 이벤트 리스너를 딱 한 번만 설정 (이벤트 위임)
nav.addEventListener('click', (event) => {
    // 클릭된 요소가 어떤 것이든, 그 요소를 포함하는 가장 가까운 '.cafe' li를 찾는다
    const targetCafe = event.target.closest('.cafe');

    // 만약 '.cafe' li 바깥쪽을 클릭했다면, 아무것도 하지 않고 함수를 종료
    if (!targetCafe) {
        return;
    }

    // a 태그의 기본 동작(페이지 이동 등)을 막는다
    event.preventDefault();

    // 찾은 '.cafe' li가 전체 메뉴 리스트에서 몇 번째인지(index) 알아낸다
    const index = navItems.indexOf(targetCafe);

    // 유효한 index를 찾았다면...
    if (index > -1) {
        // 슬라이드를 해당 index에 맞게 이동시킨다 (index * 20%)
        slidesContainer.style.transform = `translateX(-${index * 20}%)`;

        // 모든 메뉴에서 'active' 클래스를 일단 전부 제거하고,
        navItems.forEach(item => item.classList.remove('active'));
        // 현재 클릭한 메뉴(targetCafe)에만 'active' 클래스를 추가한다
        targetCafe.classList.add('active');
    }
});

// 페이지가 처음 로드될 때 첫 번째 메뉴를 활성화 상태로 만든다
if (navItems.length > 0) {
    navItems[0].classList.add('active');
}

