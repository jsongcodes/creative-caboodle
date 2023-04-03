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
    title: "topic 1",
    image_url: "https://blog.allaboutlearningpress.com/wp-content/uploads/2015/07/Silent-E-Featured-540x400.png",
    description: "The silent e hides behind a consonant and scares a vowel to say its own name!",
    )
topic2 = Topic.create(
    title: "topic 2",
    image_url: "https://res.cloudinary.com/teepublic/image/private/s--mEymW5CG--/c_fit,g_north_west,h_816,w_840/co_000000,e_outline:40/co_000000,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1590857515/production/designs/10793192_0.jpg",
    description: "Strong writers always prove their ideas with text evidence.",
    )
topic3 = Topic.create(
    title: "topic 3",
    image_url: "https://cdn.brainpop.com/english/writing/mainidea/screenshot1.png",
    description: "Great readers always think about what the text is teaching us while reading. Then they jot the main idea at the end of the text.",
    )
topic4 = Topic.create(
    title: "topic 4",
    image_url: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*euRdVF_C82YBDrmftlwopw.jpeg",
    description: "Most of the things we capitalize in English are what we refer to as ‘proper nouns.’ They are the names of specific and unique things.",
    )
topic5 = Topic.create(
    title: "topic 5",
    image_url: "https://filestore.medicineslearningportal.org/image_urls/istock%20punctuation.png",
    description: "The marks, such as period, comma, and parentheses, used in writing to separate sentences and their elements and to clarify meaning.",
    )
topic6 = Topic.create(
    title: "topic 6",
    image_url: "https://cupsandthoughts.files.wordpress.com/2017/09/gxub4080.jpg?w=2240",
    description: "Annotating allows readers to keep track of key details while reading.",
    )

puts "seeding resources..."

resource1 = Resource.create(
    title: "resource1",
    free: true,
    description: "youtube video that explains ___.",
    website_url: "https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified",
    # topic_id: topic1.id,
    favorites: 0
    # creator_id: user1.id
    )
resource2 = Resource.create(
    title: "resource2",
    free: true,
    description: "blog that explains how to build a backend",
    website_url: "https://dev.to/jsongcodes/building-a-backend-for-a-full-stack-web-app-4if",
    # topic_id: topic2.id,
    favorites: 1
    # creator_id: user2.id
    )
resource3 = Resource.create(
    title: "resource3",
    free: false,
    description: "podcast to help you ___",
    website_url: "https://open.spotify.com/episode/6tEUG2LYIiqIOVjfFDNjls",
    # topic_id: topic3.id,
    favorites: 2
    # creator_id: user3.id
    )

puts "seeding notes..."

note1 = Note.create(
    content: "note1",
    resource_id: resource1.id,
    user_id: user1.id)
note2 = Note.create(
    content: "note2",
    resource_id: resource2.id,
    user_id: user2.id)
note3 = Note.create(
    content: "note3",
    resource_id: resource3.id,
    user_id: user3.id)

puts "Done seeding!"
