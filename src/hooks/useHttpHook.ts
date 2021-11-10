import { useEffect, useState } from 'react';

interface IProps {
  api: (params: Object) => (string[]);
  params?: Object;
  watch?: any[] | [];
  key?: string;
}
const useHttpHook = (props: IProps) => {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const { api, params = {}, watch = [], key = 'data' } = props;

  useEffect(() => {
    handleApi(params);
  }, watch)

  const handleApi = async (params: Object) => {
    try {
      setLoading(true)
      const res = await api(params)
      setData(res[key]);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
  };

  return {
    data,
    loading,
  }
};
export default useHttpHook;