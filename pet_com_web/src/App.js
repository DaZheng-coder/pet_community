import Footer from './components/Footer/'
import Router from './router/Router'
import {localStorageGet,localStorageSet} from '@/utils'
import './assets/iconfont/iconfont.css'
import './style/base.less'
import './style/common.less'

function App() {
  return (
    <div className="App">
      <div>
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default App;
