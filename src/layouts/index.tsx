import React, { FC, useMemo } from 'react'
import TabBar from './TabBar';
import Styles from './index.less';
import { useLocation } from 'umi';
interface IProps {

}
const Layouts: FC<IProps> = (props) => {

  const { pathname } = useLocation();
  
  const path = [
    '/detail',
    '/',
    '/user'
  ]

  const isShow = useMemo(() => {
    return path.includes(pathname);
  }, [pathname]);
  
  return <div className={Styles.container}>
    {props.children}
    <TabBar
      pathname={pathname}
      show={isShow}
    />
  </div>;
}

export default Layouts;
