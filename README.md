
<p align="center"><img src="https://github.com/user-attachments/assets/d90030ef-428d-43f2-ad57-5be814b17067" width="400"></p>

<h1 align="center">
   WEB프로젝트 (NO MORE SHINSA)
</h1>





# Contents

## What is?

<p align="center">기존 쇼핑몰의 필터 기능을 더 쉽고 직관적이게 이용할 수 있도록 개선한 web 홈페이지입니다.</p>
<p align="center">기본적인 요소들은 타 쇼핑몰들을 벤치마킹하여 구현하였으며</p>
<p align="center">기존의 사용하기 까다로운 필터기능을 누구나 사용할 수 있도록</p>
<p align="center">직관적이고 간단한 구성의 설문조사 기능을 제작하여 구현하였습니다.</p>

<br><br>

## 통합 구현 기능



### 유저 관련 기능
- 로그인, 회원가입, 아이디 비밀번호 찾기, 내 정보 수정, 구매한 물품 관리
### 구매 관련 기능
- 물품 검색 기능 (콤보박스 및 검색바 제공), 카카오 api를 활용하여 구매 기능 구현 (테스트용)
### 관리자 
- 각종 거래 내역 확인, 물품 추가 등록 및 수정, 회원 관리
<br>

<br>

## 내가 구현한 내용
<br>

- 메인, 검색, 구매한 물품 페이지 전체 작성
- 프로젝트 파일 병합
- 팀원들이 작성한 내용 디버깅 및 수정
- 작업 중 다양한 오류에 관한 대안책 제시
<br>
<br>

### 오류 발견 및 대안 제시 사례: 
<br>

팀원이 INSERT, DELETE 등의 작업이 정상적으로 데이터베이스에 적용되지 않는 이유에 대해 질문.
 1. 문제 파악: 트랜잭션 제어 과정에서 COMMIT이 수행되지 않아 ROLLBACK이 자동으로 진행
 > 해결 방법: 트랜잭션을 사용한 후 반드시 COMMIT을 명시하여 데이터 변경 사항을 영구적으로 저장. 트랜잭션 관리 절차를 팀원들에게 교육하여 실수를 예방

 2. 문제 파악: 삭제하려는 행이 다른 테이블에서 참조되고 있어 DELETE 작업 실패
 > 해결 방법: CASCADE 옵션의 사용에 대해 검토하였으나, 자동 삭제 설정으로 인한 행 손실 발생 가능성으로 인해 참조 중인 다른 테이블의 값을 먼저 삭제하는 로직을 추가 구현함으로 참조 무결성을 유지
  
  
<br>
<br>


## 트러블슈팅
<br><br>

프로젝트 진행 중 컨벤션이 제대로 지켜지지 않은 내용 :
<br>

- 각 역할에 맞게 class를 나누어 코드를 작성하는 것이 기본 원칙 (Controller, Service 등등..)
- 프로젝트를 진행 중 서비스 로직을 Service 담당 클래스에서 작성하지 않고, 컨트롤러에서 모두 작성한 것을 확인

<br>

위의 문제가 발생한 이유 : 
<br>

- 제대로 된 컨벤션을 만들고 공유하지 않음, 주기적으로 팀원들의 코드 작성 내용을 체크하여야 했으나 확인 과정이 늦어짐
- 서로 배워가는 과정이기에 왜 이런일이 발생했는지 체크 및 공유를 진행했으나, 프로젝트 기간이 얼마 남지 않아 내용은 그대로 진행하였음
<br><br>


프로젝트 종료 이후 생각 : 
<br>

- 각종 규칙을 만들고 이를 서로 공유한 뒤, 주기적으로 내용를 체크 할 필요성을 느꼈습니다. 
<br><br>


## 느낀점
<br><br>

1. git 숙련도가 더욱 필요하다 : <br>
   git 병합 전략을 3 Way Mergy로 진행하였으며, 잦은 충돌로 프로젝트 진행에 어려움을 겪었습니다.<br>
   또한 초기 프로젝트 설정(git ignore 파일, 폴더 경로 등)을 아무렇게나 만드는 것이 아닌, 미리 협의를 통해 팀장이 만들고 공유하는 것이 바람직하다고 느꼈습니다.
<br><br>

2. 소통이 중요하다 : <br>
   소통의 중요성에 대해 인지하고 있는 상황이였으나, 프로젝트를 진행하면서 여전히 체계적이지 못하고 부족하다는 느낌을 받았습니다. <br>
   실무에서는 어떤 방식으로 프로젝트를 진행하고 완수하는지에 대하여 알아가고 배울 필요성을 느꼈습니다.<br>


<br>
<br>



## Key Features

<br><br>

타 홈페이지의 필터 기능은 전문적인 지식을 요구하는 경우가 많고 > 누구나 쉽게 쓸 수 있도록 변경한 설문조사식 필터 기능입니다. 
<br><br><br>

ex : 기존의 쇼핑몰 필터 예제
<br><br><br>
<p align="center"><img src="https://github.com/user-attachments/assets/2a74e63f-db82-47b3-92e6-2039a6c05a23" width="800"></p>
<br><br>

ex : 변경한 쇼핑몰 필터 예제 (어려운 단어 사용을 최대한 배제. 색깔, 계절 등의 정보를 바탕으로 결과목록을 추천)
<br><br><br>
<p align="center"><img src="https://github.com/user-attachments/assets/0a578e91-fd4a-4239-904b-63d3db4141a4" width="500"></p>
<p align="center"><img src="https://github.com/user-attachments/assets/1754e607-5d0d-460f-86f9-c9bb1dba09db" width="500"></p>
<p align="center"><img src="https://github.com/user-attachments/assets/d6648599-f051-4c73-9602-8317c2e0d115" width="500"></p>

## other components

<br><br>
<p align="center">제품을 클릭하였을 때 구매자들의 평가를 쉽게 알 수 있도록 요소 배치 (좋아요, 싫어요)</p>
<br><br>

<p align="center"><img src="https://github.com/user-attachments/assets/497e56d0-69de-499e-b7b1-69615b2435e3" width="700></p>
<p align="center"><img src="https://github.com/user-attachments/assets/b2d59862-7f8c-42d0-b0c6-583d4b8e3002" width="700"></p>
<br><br><br><br>

<p align="center">주소, 결제 등의 요소들은 타 사이트의 api를 이용하여 구현</p>
<br><br>
<p align="center"><img src="https://github.com/user-attachments/assets/68803700-d5db-4d21-a50c-c648a32d17fb" width="500"></p>
<p align="center"><img src="https://github.com/user-attachments/assets/4d79da3d-85a0-4bc9-95c9-4b2a439cc84c" width="500"></p>
<br><br><br><br>

<p align="center">그 외 쇼핑몰 이용에 필요한 서브 기능</p>
<p align="center"><img src="https://github.com/user-attachments/assets/dd1afe3b-f106-4670-a532-2a9aa74b5c56" width="1000"></p>
<p align="center"><img src="https://github.com/user-attachments/assets/774adc3a-7859-492a-a416-9b0624c1c183" width="1000"></p>







<h2>Built With</h2>
   

<p>
<img src="https://img.shields.io/badge/MySQL-005C84?logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Eclipse-2C2255?logo=eclipse&logoColor=white">
<img src="https://img.shields.io/badge/javascript-%23F7DF1E?logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html-%23E34F26?logo=html5&logoColor=black">
<img src="https://img.shields.io/badge/VSCode-0078D4?logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/apachetomcat-%23F8DC75?logo=apachetomcat&logoColor=black">
<img src="https://img.shields.io/badge/maven-%23C71A36?logo=apachemaven&logoColor=white&color=orange">
<img src="https://img.shields.io/badge/git-%23F05032?logo=git&logoColor=black">
</p>




## Development setup

데이터베이스 서버 구축(권한 설정 포함), 테이블 논리 구성, 작업 프로젝트 생성, 공유 repository 생성 등 역할을 분배하여 개발환경을 구축.

1. 테이블 정의 : 기본키(Pk), 외래키(Fk), 널 허용 여부(Null/Not Null), 자동 증가(Auto Increment)설정을 포함한 테이블 정의.
2. 테이블 생성 : cloth, category, user등 주요 테이블 및 외래키를 구성
3. ERD 활용 : 엔터티-관계 다이어그램을 기반으로 테이블 간의 외래키 관계를 검증하여 데이터베이스의 무결성 유지
4. Test Mapper를 작성하여 실시간 입출력 테스트

---
## ERD 구성

<img src="https://github.com/user-attachments/assets/6552cbfa-4483-448d-a442-34efdb730dc2" width="1000" height="900">

---


## collaboration process
<br><br>
<p align="center"><img src="https://github.com/user-attachments/assets/79768f31-04f3-41b7-87d8-c68c1abd4857" width="1000"></p>
<br><br><br><br>
<p align="center">각 요소들의 설계 초안을 ppts 파일을 이용하여 부가 설명 진행</p>
<br><br>
<p align="center"><img src="https://github.com/user-attachments/assets/170dd687-22e0-4b12-b998-4bc0c42e981f" width="1000"></p>
<br><br><br><br>



## 자주 묻는 질문?

<h4>설문조사필터기능의 알고리즘은 어떤 방식으로 작동하나요?</h4>

<h6>카테고리 테이블은 상품들의 id값을 외래키로 참조하고 있으며 나머지 컬럼들은 세부 카테고리 테이블들의 값을 가지고 있습니다. (계절, 색깔, 상하의등)
  이를 이용하여 설문결과를 바탕으로 특정한 숫자값을 가져온 뒤, 세부 카테고리에 숫자값이 포함되어 있는 모든 옷들을 select 문으로 찾습니다.
     
   ex(계절) : 봄 = 1 여름 = 2 가을 = 3 겨울 = 4 모든계절 = 5 라고 가정하고,
   봄을 선택하였다면 카테고리 테이블의 season_category 값이 1 또는 5인 모든 옷을 where 절로 찾습니다.
</h6>
    
## Authors

[![GitHub stats](https://github-readme-stats.vercel.app/api?username=MooHyunPark)](https://github.com/MooHyunPark)


