import { Suspense } from 'react'
import { SectionExternal } from './components/Section_external'
import { SectionLocal } from './components/Section_local'

const Home = () => {
  return (
    <div>
      <h1>Next.js & DB on Docker Test</h1>

      <div className='contents'>
        <Suspense fallback={<p>loading...</p>}>
          <SectionLocal />
        </Suspense>
        <Suspense fallback={<p>loading...</p>}>
          <SectionExternal />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
