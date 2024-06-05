'use client'

import { InsertItem } from '@/app/lib/action'

export const SectionForm = () => {
  return (
    <div>
      <form action={InsertItem}>
        <label htmlFor='first_name' className='item'>
          姓
          <input type='text' name='first_name' className='input' />
        </label>
        <label htmlFor='last_name' className='item'>
          名
          <input type='text' name='last_name' className='input' />
        </label>
        <button type='submit' className='button'>
          送信
        </button>
      </form>
    </div>
  )
}
