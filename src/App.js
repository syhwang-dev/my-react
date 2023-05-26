// import logo from './logo.svg';
import './App.css';
// import Hello from './01/Hello';  // 확장자는 안 써도 됨.
// import MyClock from './02/MyClock';
// import Box from './03/Box';  // return 안에서 주석처리 되어 사용되지 않는 컴포넌트의 import도 주석처리하자. 경고 뜸.
// import MyDiv from './04/MyDiv';
// import Frcst from './05/Frcst';
// import Taccident from './06/Taccident';
// import MyRef from './07/MyRef';
// import Gallery from './081/Gallery';
// import RouteMain from './09/RouteMain'
// import Fcst from './10/Fcst';
import Fcst from './102/Fcst';
import CodeView from './103/CodeView';

function App() {
  return (
    // 컴포넌트 불러오기
    // <Hello />
    // <MyClock /> 
    // <Box />

    // 반드시 종료 태그를 사용해야 함.
    // <>
    // <h1>APP</h1>
    // </>
    // <MyDiv />
    // <Frcst />
    // <Taccident />
    // <MyRef/>
    // <Gallery/>
    // <RouteMain />
    // <Fcst />
    // <h1>App</h1>
    <CodeView />
  );
}

export default App;
