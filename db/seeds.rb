Note.destroy_all
Resource.destroy_all
Topic.destroy_all
User.destroy_all

puts "seeding users..."

user1 = User.create(
    username: 'moet',
    email: 'moet@gmail.com',
    password: 'moet1')
user2 = User.create(
    username: 'joshua',
    email: 'joshua@gmail.com',
    password: 'joshua1')
user3 = User.create(
    username:'hayden',
    email: 'hayden@gmail.com',
    password: 'hayden1')
user4 = User.create(
    username: 'aaliyah',
    email: 'aaliyah@gmail.com',
    password: 'aaliyah1')
user5 = User.create(
    username: 'eliajah',
    email: 'eliajah@gmail.com',
    password: 'eliajah1')

puts "seeding topics..."

topic1 = Topic.create(
    title: "photography",
    image_url: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxjdUl2Rko5SHNkSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "to become a better photographer",
    )
topic2 = Topic.create(
    title: "literature",
    image_url: "https://images.unsplash.com/photo-1592355591823-2657dbc25ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxjdUl2Rko5SHNkSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "books to read",
    )
topic3 = Topic.create(
    title: "yoga",
    image_url: "https://images.unsplash.com/photo-1562751362-404243c2eea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xjdUl2Rko5SHNkSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "for your inner yogi",
    )
topic4 = Topic.create(
    title: "writing",
    image_url: "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxjdUl2Rko5SHNkSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "write it out",
    )
topic5 = Topic.create(
    title: "mental health",
    image_url: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxjdUl2Rko5SHNkSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "take care of your inner self",
    )
topic6 = Topic.create(
    title: "development",
    image_url: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxjdUl2Rko5SHNkSXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    description: "learn to code things",
    )

puts "seeding resources..."

resource1 = Resource.create(
    title: "Learn React In 30 Minutes",
    description: "youtube video that teaches React",
    website_url: "https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified",
    favorites: 0,
    user_id: user1.id
    )
resource2 = Resource.create(
    title: "Building the backend for a full stack web app",
    description: "blog that explains how to build the backend for a full stack app",
    website_url: "https://dev.to/jsongcodes/building-a-backend-for-a-full-stack-web-app-4if",
    favorites: 1,
    user_id: user2.id
    )
resource3 = Resource.create(
    title: "Communication 101 & conflict resolution",
    description: "podcast to help you become better at communicating and resolving conflicts",
    website_url: "https://open.spotify.com/episode/6tEUG2LYIiqIOVjfFDNjls",
    favorites: 2,
    user_id: user3.id
    )

puts "seeding notes..."

note1 = Note.create(
    content: "components, state, props, rendering, event handling",
    resource_id: resource1.id,
    user_id: user1.id)
note2 = Note.create(
    content: "need to learn how to create models",
    resource_id: resource2.id,
    user_id: user2.id)
note3 = Note.create(
    content: "can be useful in my relationships",
    resource_id: resource3.id,
    user_id: user3.id)

puts "Done seeding!"
