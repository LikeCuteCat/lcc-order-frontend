import { useEffect } from 'react';
import { loadUserAPI, loadUserStoreAPI } from '../apis/user';
import { useRecoilState } from 'recoil';
import { user } from '../recoil';
import { useQuery } from 'react-query';
import { produce } from 'immer';
import { User } from '../types/dataTypes';

//it will feel up the me state.
export function useLoadUser() {
  const [userState, setUserState] = useRecoilState(user);
  const { data } = useQuery<User>('user', loadUserAPI);

  useEffect(() => {
    if (data) {
      loadUserStoreAPI(data.id).then((res) => {
        setUserState((prev) =>
          produce(prev, (draft) => {
            draft.me = {
              id: data.id,
              type: data.type,
              email: data.email,
              storeInfo: res,
            };
          }),
        );
      });
    }
  }, [data]);

  return userState;
}
