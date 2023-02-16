import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'; 
import { Button } from 'components/Button';
import { useRef } from 'react';

import styles from './Search.module.scss';

interface SearchProps { 
  hasError: boolean,
  onSubmit: (text:string) => void 
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {


  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value

    if(text) {
      onSubmit(text);
      event.currentTarget.reset()
    }
    
  }
  
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search} >
      <label htmlFor="search" className={styles.label}>
        <SearchIcon/>
      </label>
      <input type="text" 
             className={styles.textField} 
             name="username" 
             id="search" 
             placeholder='Search Github username...'/>
      {hasError && (
        <div className={styles.error}>
          NO result
        </div>
      )}
      <Button>Search</Button>
      </div>
    </form>
  )
};