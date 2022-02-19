# Carrot Market
## Skill Set
### Next.js, Tailwind, Prisma, PlanetScale and Cloudflare 를 사용해서 만든다.


## Tailwind 동작방식
과거(Tailwind 3.0 이전)에 Tailwind는 엄청 큰 CSS파일로 이루어져 있어 class를 중첩하여 사용할 수 없었고,
개발이 완료되고 배포하기 전에 사용하지 않는 class 삭제처리(purging)를 했었다.
이후 Tailwind 3.0 버전이 나오면서 Just-In-Time(JIT) 컴파일러가 도입이 되면서 class를 중첩하여 사용할 수 있게 되었다.
*JIT Compiler?
    내가 작성한 코드를 실시간으로 감시하면서 필요한 클래스를 생성하는 기능을 하는 Tailwind 컴파일러