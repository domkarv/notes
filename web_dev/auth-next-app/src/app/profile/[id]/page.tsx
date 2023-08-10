const UserProfile = ({ params }: any) => {
  return (
    <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
      This is profile of user with id:
      <span className="ml-2 rounded bg-orange-500 p-2">{params.id}</span>
    </div>
  );
};

export default UserProfile;
