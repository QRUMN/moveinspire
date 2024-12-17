export const FEATURED_MEMBER = {
  name: 'Sarah Anderson',
  title: 'Member since 2023',
  image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  quote: "Move & Inspire has completely transformed my approach to wellness and self-expression.",
  story: "After joining the community, I discovered a passion for dance I never knew I had. The supportive environment and expert guidance helped me overcome my initial hesitation and build lasting confidence."
};

export const COMMUNITY_METRICS = {
  activeMembers: '250+',
  monthlyClasses: '120+',
  successStories: '50+'
};

export const COMMUNITY_POSTS = [
  {
    id: '1',
    author: {
      name: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    content: 'Just completed my first hip-hop class! Amazing energy and such a supportive group. Can't wait for the next one! 💃',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    timestamp: new Date(Date.now() - 3600000),
    likes: 24,
    comments: 8
  },
  {
    id: '2',
    author: {
      name: 'Maria Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    content: 'Monthly wellness goals check-in: meditation ✅ stretching ✅ dance classes ✅ Feeling stronger every day!',
    timestamp: new Date(Date.now() - 7200000),
    likes: 18,
    comments: 5
  }
];

export const SUCCESS_STORIES = [
  {
    id: '1',
    name: 'Jessica Kim',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    preview: 'From beginner to instructor: My journey of personal growth through dance therapy.'
  },
  {
    id: '2',
    name: 'Rachel Thompson',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    preview: 'How movement therapy helped me overcome anxiety and find my confidence.'
  }
];

export const UPCOMING_EVENTS = [
  {
    id: '1',
    title: 'Summer Dance Workshop',
    date: new Date(Date.now() + 604800000), // 1 week from now
    location: 'Main Studio'
  },
  {
    id: '2',
    title: 'Wellness & Movement Festival',
    date: new Date(Date.now() + 1209600000), // 2 weeks from now
    location: 'Central Park'
  }
];