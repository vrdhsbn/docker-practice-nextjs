import { Suspense } from 'react'
import { SectionExternal } from './components/Section_external'
import { SectionForm } from './components/Section_form'
import { SectionLocal } from './components/Section_local'

const Home = () => {
  return (
    <div>
      <h1>Next.js & MySQL on Docker Test</h1>

      <div className='formArea'>
        <SectionForm />
      </div>

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
