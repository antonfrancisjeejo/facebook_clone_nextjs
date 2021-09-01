import StoryCard from "./StoryCard";

const stories = [
  {
    src: "https://pbs.twimg.com/media/D91kL9HUYAASDHm.jpg",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    name: "Ronaldo",
  },
  {
    src: "https://png.pngtree.com/png-vector/20190228/ourlarge/pngtree-coding-conceptual-illustration-design-png-image_708909.jpg",
    profile:
      "https://avatars0.githubusercontent.com/u/44845055?s=400&u=da15adf6e19454410ef246b6dc9ca776492c3180&v=4",
    name: "Jeejo",
  },
  {
    src: "https://loogart.com/img/loogart-montreal-mashup.jpg",
    profile:
      "https://media-exp1.licdn.com/dms/image/C5603AQGD3lfBaw0GMQ/profile-displayphoto-shrink_200_200/0/1619509095804?e=1626307200&v=beta&t=NWAqy0VEokVRo0YvtOfUxTECxMZQGvNrIQPGIlesFXw",
    name: "Ranjith Kumar",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3dc70e58572071.5a0198a819d0a.jpg",
    profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/1200px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg",
    name: "Sachin",
  },
  {
    src: "https://images-na.ssl-images-amazon.com/images/I/81NxbUYKZ3L._SL1500_.jpg",
    profile: "https://assets.telegraphindia.com/telegraph/MESSI500_SS.jpg",
    name: "Lionel Messi",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => {
        return (
          <StoryCard
            key={index}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
};

export default Stories;
