import { useState } from 'react';
import { Profile } from './Profile';
import { Details } from './Details';

export const Main = () => {
  const [tab, setTab] = useState('daily');

  const changeTab = (e) => {
    setTab(e.target.id);
  }

  return (
    <main>
      <Profile changeTab={changeTab} tab={tab} />
      <Details tab={tab} />
    </main>
  )
}