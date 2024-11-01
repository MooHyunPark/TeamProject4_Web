
<p align="center"><img src="https://github.com/user-attachments/assets/d90030ef-428d-43f2-ad57-5be814b17067" width="400"></p>

<h1 align="center">
   WEB프로젝트 (NO MORE SHINSA)
</h1>


<p align="center">
  <h2>Built With</h2>
   
   Development
   <br><br>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-%23F7DF1E?logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/html-%23E34F26?logo=html5&logoColor=black">
 

Enviroment
<br><br>
<img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/apachetomcat-%23F8DC75?logo=apachetomcat&logoColor=black">
<img src="https://img.shields.io/badge/git-%23F05032?logo=git&logoColor=black">




# Contents

## What is?

<p align="center">기존 쇼핑몰의 필터 기능을 더 쉽고 직관적이게 이용할 수 있도록 개선한 web 홈페이지입니다.</p>
<p align="center">기본적인 요소들은 타 쇼핑몰들을 벤치마킹하여 구현하였으며</p>
<p align="center">기존의 사용하기 까다로운 필터기능을 누구나 사용할 수 있도록</p>
<p align="center">직관적이고 간단한 구성의 설문조사 기능을 제작하여 구현하였습니다.</p>





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

주소, 결제 등의 요소들은 타 사이트의 api를 이용하여 구현
<p align="center"><img src="https://github.com/user-attachments/assets/68803700-d5db-4d21-a50c-c648a32d17fb" width="500"></p>
<p align="center"><img src="https://github.com/user-attachments/assets/4d79da3d-85a0-4bc9-95c9-4b2a439cc84c" width="500"></p>


<p align="center"><img src="https://github.com/user-attachments/assets/dd1afe3b-f106-4670-a532-2a9aa74b5c56" width="500"></p>


![제품상세페이지](https://github.com/user-attachments/assets/497e56d0-69de-499e-b7b1-69615b2435e3)
![장바구니](https://github.com/user-attachments/assets/774adc3a-7859-492a-a416-9b0624c1c183)
![결제완료페이지]()
![댓글예시](https://github.com/user-attachments/assets/b2d59862-7f8c-42d0-b0c6-583d4b8e3002)
![결제](https://github.com/user-attachments/assets/4d79da3d-85a0-4bc9-95c9-4b2a439cc84c)

ㅁㄴㅇ


## Development setup



---
## ERD 구성

<img src="https://github.com/user-attachments/assets/6552cbfa-4483-448d-a442-34efdb730dc2" width="1000" height="1000">

---




* 사용 환경과 사용법 설명
* 또는 개발을 위한 개발환경 구축 설명하기

> To clone and run this application,
> you'll need [Git](https://git-scm.com)
> and [download Maven](https://maven.apache.org/download.cgi)
> Maven is a Java tool, so you must have Java installed in order to proceed. Set the JAVA_HOME environment variable pointing to your JDK installation or have the java executable on your PATH.
>
> From your command line:

```bash
# Clone this repository
$ git clone https://github.com/username/app-repository

# Go into the repository
$ cd app-repository

# Install dependencies
$ maven package

# Run the app
$ java -cp target/my-app-1.0-SNAPSHOT.jar com.mycompany.app.App
```

> **Note** > [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) or use OpenJDK.

## Repository Structure

```sh
└──Project
    ├─README.md
    ├─.gitignore
    ├─src
    │  ├─main
    │  │  ├─java
    │  │  │  ├─...
    │  │  │  └─packages
    │  │  ├─resource
    │  │  └─webapp
    │  │      ├─META-INF
    │  │      ├─static
    │  │      └─WEB-INF
    │  │          ├─lib
    │  │          └─views
    │  └─test
    │      └─java
    └─pom.xml
```

- 위와 같은 폴더 구조 텍스트는 => [폴더 트리 구조 생성 사이트](https://ascii-tree-generator.com/) 를 활용하거나
- 또는 윈도우 환경에서는 _`cmd /c tree`_ 명령어를 해당 폴더에서 실행해보세요



## FAQ

<details>
  <summary>자주 묻는 질문?</summary>
  <dl>
  <dt>질문 1</dt>
  <dd>답변 1</dd>
  </dl>
</details>
    
## Authors

* GitHub [@깃허브 프로필 페이지](https://github.com/SYacuCLoud) | Twitter [@SNS 등](https://twitter.com/)

> 다음과 같은 profile을 사용하고자 한다면 아래 링크들을 활용해보세요
>
> [GitHub stats](https://github.com/anuraghazra/github-readme-stats)
>
> [Profile generator](https://gprm.itsvg.in/)

[![GitHub stats](https://github-readme-stats.vercel.app/api?username=MooHyunPark)](https://github.com/MooHyunPark)


