import { FC, PropsWithChildren } from 'react';

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: "yellow",
        borderRadius: "5px",
        padding: "10px"
    }}>
    
        <div>
            {children}
        </div>

    </div>
  )
}
