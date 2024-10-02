<!-- 작성자 : 이나겸 -->

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>관리자 페이지</title>
<style type="text/css">
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    width: 100%;
}

nav .logo {
    text-align: center;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
}

.panel {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.menu-item {
    margin-bottom: 15px; /* 메뉴들 사이의 간격 */
    border-radius: 8px; /* 메뉴 테두리를 둥글게 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    transition: box-shadow 0.3s ease; /* 마우스 호버 시 애니메이션 */
}

.menu-item:last-child {
    margin-bottom: 0; /* 마지막 메뉴에는 간격을 추가하지 않음 */
}

.menu-item a {
    display: block;
    color: #333;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px; /* 내부 콘텐츠도 둥글게 */
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.menu-item a:hover {
    background-color: #f4f4f4;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* 호버 시 그림자 확대 */
}

.label {
    text-align: left;
    font-size: 17px; /* 글씨 크기 조절 */
    font-weight: plain;
    margin-bottom: 10px; /* 간격 조절 */
    box-shadow: none; /* 그림자 효과 제거 */
}
</style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <h1>Web Project 홈페이지</h1>
                <h2>시스템 관리</h2>
            </div>
        </nav>
    </header>
    <main>
        <div class="panel">
            <div class="label">회원</div>
            <div class="menu-item">
                <a href="/userManage">회원 관리</a>
            </div>
            <div class="label">판매</div>
            <div class="menu-item">
                <a href="/allSales">총 매출</a>
            </div>
            <div class="menu-item">
                <a href="/purchaseStatus">소비자 구매 현황</a>
            </div>
            <div class="menu-item">
                <a href="/productStatus">상품 입출고 현황</a>
            </div>
            <div class="label">설정</div>
            <div class="menu-item">
                <a href="/addProduct">상품 추가</a>
            </div>
        </div>
    </main>
</body>
</html>