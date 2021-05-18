import { stories } from "../data/storiesData";
import StoryCard from "./StoryCard";

function Stories() {
  return (
    <div className="flex flex-grow justify-center space-x-3 mx-auto">
      {stories.map((story, idx) => (
        <StoryCard
          key={idx}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
