const META = {
    title: "tic-tac-toe",
    description: "create rooms and play tic-tac-toe with your friends",
    lang: "en",
    url: "https://example.com",
    image: "/logo.png",
    tags: []
}

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export { IS_PRODUCTION, META };