import { useTranslation } from "react-i18next";

export const CreateCateg = (src) => {
  const arr = [];
  const [t] = useTranslation();
  for(let i = 0; i>=0 ; i++){
    if(!t(`${src}.${i}`).includes(`${src}`)){
      arr.push(t(`${src}.${i}`))
    }else{
      return arr
    }
  }  
}