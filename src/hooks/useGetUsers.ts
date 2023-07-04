// import { useEffect, useState } from 'react';
// import { AxiosError } from 'axios';
// import errorHandler from '@helpers/errorHandler';
// import { PAGINATION_SIZES } from '@constants/common.constants';
// import { getRandomUsers } from '@services/github';
// import useMessageReporter from './useMessageReporter';

// const useGetRandomUsers = () => {
  
//   const [users, setUsers] = useState<(IUser | undefined)[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const { reportMessage } = useMessageReporter();

//   const clearUsers = () => {
//     setUsers([]);
//   };

//   const getUsers = async () => {
//     try {
//       setIsLoading(true);
//       const response = await getRandomUsers();
//       if (response) {
//         const usersList = response.data.items;

//         setUsers((currentUsers) =>
//           currentUsers.map((user, index) => user ?? usersList[index]),
//         );
//       }
//     } catch (error) {
//       const errorMessage = errorHandler(error as AxiosError);
//       reportMessage(errorMessage);
//       clearUsers();
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (users.includes(undefined)) {
//       getUsers();
//     }
//   }, [users]);

//   const removeUser = (indexOfUser: number) => {
//     setUsers((previousUsers) => {
//       const newUsers = [...previousUsers];
//       newUsers.splice(indexOfUser, 1, undefined);
//       return newUsers;
//     });
//   };

//   return {
//     isLoading,
//     users,
//     removeUser,
//     clearUsers,
//     getUsers,
//   };
// };

// export default useGetRandomUsers;
