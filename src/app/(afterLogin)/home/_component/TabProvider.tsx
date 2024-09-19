"use client"

import {createContext, ReactNode, useContext, useState} from "react";

export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: 'rec' | 'fol') => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('rec');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  )
}

export function useTab(){
  const context = useContext(TabContext);

  if(!context){
    throw new Error("TabProvider에서 벗어났습니다. TabProvider 안에만 TabContext를 사용할 수 있습니다.")
  }

  return context;
}