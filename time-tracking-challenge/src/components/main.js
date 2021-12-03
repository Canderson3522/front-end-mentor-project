import { useState } from 'react';
import { Profile } from 'Profile.js';
import { Details } from 'Details.js';

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