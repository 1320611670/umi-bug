import { useState,useEffect} from "react";

export default () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setUser(1111111111111);
      setLoading(false);
  }, []);
  return {
    user,
    loading,
  };
};
