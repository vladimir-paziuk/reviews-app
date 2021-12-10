export const mock_profile = {
    id: 7,
    firstName: "Jane",
    lastName: "Doe",
    rewards: 250,
    amount: 100,
    image: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
};

export const mock_feeds = [
    {
        id: 1,
        author: {
            id: 1,
            firstName: "David",
            lastName: "Greene"
        },
        rewardedBy: {
            id: 2,
            firstName: "John",
            lastName: "Chen"
        },
        image: "https://avatars.githubusercontent.com/u/810438?v=4",
        timestamp: Date.now(),
        content: "Thanks for your help in creating the product overview dech. Your help to show cases those scenarios really helped in closing the loop on the story.",
    },
    {
        id: 2,
        author: {
            id: 2,
            firstName: "John",
            lastName: "Chen"
        },
        rewardedBy: {
            id: 1,
            firstName: "David",
            lastName: "Greene"
        },
        timestamp: 1638900516024,
        content: "Thanks for your help in creating the product overview dech.",
    },
    {
        id: 3,
        author: {
            id: 1,
            firstName: "David",
            lastName: "Greene"
        },
        rewardedBy: {
            id: 2,
            firstName: "John",
            lastName: "Chen"
        },
        timestamp: 1638986900971,
        content: "Your help to show cases those scenarios really helped in closing the loop on the story.",
    },
];

export const mock_my_rewards = mock_feeds.map((feed) => ({
    ...feed,
    author: {...mock_profile},
})).reverse();

export const getReward = ({ destination, amount, reason }) => {
    const author = destination.split(' ');

    return {
        id: Math.random().toString(16).slice(2),
        author: {
            id: 1,
            firstName: author[0],
            lastName: author[1] || "",
        },
        rewardedBy: {...mock_profile},
        timestamp: Date.now(),
        content: reason,
    };
};