declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }

  function gtag(...args: any[]): void;
}


export const sendGtagEvent = (
    category: string,
  action: string,
  params: Record<string, any> = {} 
) =>{
    if(!window.gtag) return;
    window.gtag(category, action, params);
}