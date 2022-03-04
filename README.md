# Carrot Market
### Skill Set
> Next.js, Tailwind, Prisma, PlanetScale and Cloudflare
>>서버리스 마켓플레이스 웹사이트를 만듭니다.   
> 유저들은 제품을 검색, 업로드하고, 리뷰할 수 있습니다. 또한, 유저 휴대폰 인증, 프로필 꾸미기, 좋아요 등 SNS 기능을 만듭니다.   
> 추가적으로 ‘라이브 쇼핑’ 기능까지 구현합니다.

##What is Tailwind?
### Tailwind 동작방식
과거(Tailwind 3.0 이전)에 Tailwind는 엄청 큰 CSS파일로 이루어져 있어 class를 중첩하여 사용할 수 없었고,
개발이 완료되고 배포하기 전에 사용하지 않는 class 삭제처리(purging)를 했었다.  
이후 Tailwind 3.0 버전이 나오면서 Just-In-Time(JIT) 컴파일러가 도입이 되면서 class를 중첩하여 사용할 수 있게 되었다.

**JIT Compiler?**  
>내가 작성한 코드를 실시간으로 감시하면서 필요한 클래스를 생성하는 기능을 한다.

#What is Prisma?
###Prisma
>Prisma는 Node.js와 Typescript ORM
> (**ORM: Object Relational Mapping**)으로 자바스크립트 또는 타입스크립트 코드와 데이터베이스 사이에 다리를 놓아주는 역활을 한다. 
###Prisma의 특징
>1. Prisma를 사용하기 위해서는 Prisma에게 DB가 어떻게 생겼는지, 데이터
> 의 모양을 설명해줘야 한다.
>2. Prisma가 타입에 관한 정보를 알고 있으면 client를 생성해줄 수 있고,
client를 이용하여 TS로 DB와 직접 상호작용이 가능하다.


##What is PlanetScale?
### PlanetScale
> PlanetScale은 MySQL과 호환되는 serverless 데이터베이스 플랫폼으로
> 서버를 우리가 유지보수 및 관리를 할 필요가 없다.
### PlanetScale 장점
> Github처럼 라인으로 관리를 할 수 있다.  
> (CLI : Command Line Interface)