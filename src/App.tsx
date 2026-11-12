import './App.css'

export default function App(){
  return (<>
    <div className="flex justify-center items-center gap-15">
      <img src="/NFKEL.svg" alt="logo" width="500"/>
      <p> ---- </p>
      <h1>Hello NFKEL</h1>
    </div>
    <p>- Lorem Ipsum dolor sit amet, consectetur adipiscing elit. -</p>
    <div className='h-5'></div>
    <div className="flex flex-col items-center gap-5 w-full">
      <p>더 나은 경험을 위해,</p>
      <audio src="/NFKEL/NFKEL.wav" controls loop className="w-150"/>
      <p>소리 재생을 허용해주세요.</p>
    </div>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <p>우선 이 웹 페이지의 제작자는 동인 음악을 정말 좋아합니다.</p>
    <p>동인 음악의 진입 장벽은 개인적으로 빠른 속도, 그리고 복합적인 사운드라고 생각해요.</p>
    <p>이 사이트에서는 여러분들께서 빠른 속도의 음악을 어떻게 들을 수 있는지</p>
    <p>점점 빨라지는 곡을 통해 알려드리려고 합니다.</p>
    <div className='h-5'></div>
    <p>시작하기에 앞서, 맨 위에서 재생한 곡은 이 사이트에서 사용할 곡의 풀 버전입니다.</p>
    <p></p>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <div className="flex flex-col items-center gap-5 w-full">
      <audio src="/NFKEL/Part%201.wav" controls className="w-150"/>
    </div>
    <p>도입부. BPM 100의 그리 빠르지 않은 소리로 시작해봅시다.</p>
    <p>여기까지는 누구라도 편히 들을 수 있을 거라고 생각해요.</p>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <div className="flex flex-col items-center gap-5 w-full">
      <audio src="/NFKEL/Part%202.wav" controls className="w-150"/>
    </div>
    <p>동일 BPM인데, 이번엔 2배 빠르게 들리게 해봤어요.</p>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <div className="flex flex-col items-center gap-5 w-full">
      <audio src="/NFKEL/Part%203.wav" controls className="w-150"/>
    </div>
    <p>이 상태로, 점점 빨라지게 해봅시다.</p>
    <p>BPM은 110~170까지 점점 높아질 거에요.</p>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <div className="flex flex-col items-center gap-5 w-full">
      <audio src="/NFKEL/Part%204.wav" controls className="w-150"/>
    </div>
    <p>180BPM. 하지만 베이스를 없애서 조금 느리게 들릴 수 있어요.</p>
    <p>이 상태로, 멜로디를 넣어봅시다.</p>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <div className="flex flex-col items-center gap-5 w-full">
      <audio src="/NFKEL/Part%205.wav" controls className="w-150"/>
    </div>
    <p>똑같이 180BPM.</p>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <div className="flex flex-col items-center gap-5 w-full">
      <audio src="/NFKEL/Part%206.wav" controls className="w-150"/>
    </div>
    <p>그리고 하이라이트.</p>
    <div className='h-5'></div>
    <hr/>
    <div className='h-5'></div>
    <p>이렇게 만들어놓고보니 중간에 끊기는 사람이 생길 것도 같네요.</p>
    <p>그래도 이 사이트가 도움이 되었으면 좋겠어요.</p>
    <p>마지막으로, 제 최애곡(과 자작곡)들을 소개해보고 끝내겠습니다.</p>
    <div className='h-5'></div>
    <p>파일만 있는 건 자작곡입니다.</p>
    <div className="flex flex-col items-center gap-5 w-full">
      <audio src="/adofai.wav" controls className="w-150"/>
      <audio src="/nb.wav" controls className="w-150"/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cETzlmNnXgc"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/O_KWxY4CJ5I"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
    </div>
    <p>감사합니다.</p>
    <div className='h-50'></div>
  </>)
}