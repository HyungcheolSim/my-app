Atuomatic Batching
여러 상태 업데이트 작업을 묶어서 처리(자동으로)
Transitions
긴급한 업데이트와 긴급하지 않은 업데이트를 구분하는 개념

interaction : 긴급
서버로부터 결과를 받아오는 것 : 긴급하지 않음

Suspense(유예,중단): Code Splitting 
컴포넌트: 하위 컴포넌트가 준비되기 전까지 렌더링을 유예

새로운 훅
useId()

useTransitions()

useDeferredValue()
지연 렌더링

//css, js 라이브러리용
useSyncExternalStore()

useInsertionEffect()

