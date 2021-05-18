function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer lg:px-4 md:px-6 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 xl:active:border-blue-500 group nd:active:border-blue-500">
      <Icon
        className={`h-5 sm:h-7 text-center text-gray-500 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
