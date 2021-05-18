function Comment({ name, image, comment, timestamp }) {
  return (
    <div className="p-5 rounded-t-2xl ">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full"
          src={image}
          width={40}
          height={40}
          alt=""
        />
        <div>
          <p className="font-medium">{name}</p>
          {timestamp ? (
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          ) : (
            <p className="text-xs text-gray-400">Loading...</p>
          )}
        </div>
      </div>
      <p className="mt-4">{comment}</p>
    </div>
  );
}

export default Comment;
