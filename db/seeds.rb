Note.destroy_all
Resource.destroy_all
Topic.destroy_all
User.destroy_all

puts "seeding users..."

user1 = User.create(username: 'Moet', email: 'moet@gmail.com', password: 'moet1')
user2 = User.create(username: 'Joshua', email: 'joshua@gmail.com', password: 'joshua1')
user3 = User.create(username: 'Hayden', email: 'hayden@gmail.com', password: 'hayden1')
user4 = User.create(username: 'Aaliyah', email: 'aaliyah@gmail.com', password: 'aaliyah1')
user5 = User.create(username: 'Eliajah', email: 'eliajah@gmail.com', password: 'eliajah1')

puts "seeding topics..."

topic1 = Topic.create(
    title: "silent e",
    image_url: "https://blog.allaboutlearningpress.com/wp-content/uploads/2015/07/Silent-E-Featured-540x400.png",
    description: "The silent e hides behind a consonant and scares a vowel to say its own name!",
    user_id: user1.id)
topic2 = Topic.create(
    title: "text evidence",
    image_url: "https://res.cloudinary.com/teepublic/image/private/s--mEymW5CG--/c_fit,g_north_west,h_816,w_840/co_000000,e_outline:40/co_000000,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1590857515/production/designs/10793192_0.jpg",
    description: "Strong writers always prove their ideas with text evidence.",
    user_id: user2.id)
topic3 = Topic.create(
    title: "main idea",
    image_url: "https://cdn.brainpop.com/english/writing/mainidea/screenshot1.png",
    description: "Great readers always think about what the text is teaching us while reading. Then they jot the main idea at the end of the text.",
    user_id: user3.id)
topic4 = Topic.create(
    title: "capitalization",
    image_url: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*euRdVF_C82YBDrmftlwopw.jpeg",
    description: "Most of the things we capitalize in English are what we refer to as ‘proper nouns.’ They are the names of specific and unique things.",
    user_id: user4.id)
topic5 = Topic.create(
    title: "punctuation",
    image_url: "https://filestore.medicineslearningportal.org/image_urls/istock%20punctuation.png",
    description: "The marks, such as period, comma, and parentheses, used in writing to separate sentences and their elements and to clarify meaning.",
    user_id: user4.id)
topic6 = Topic.create(
    title: "annotating",
    image_url: "https://cupsandthoughts.files.wordpress.com/2017/09/gxub4080.jpg?w=2240",
    description: "Annotating allows readers to keep track of key details while reading.",
    user_id: user5.id)


puts "seeding resources..."
resource1 = Resource.create(video_url: "This was so helpful!", website_url: "google.com", topic_id: topic1.id)
resource2 = Resource.create(video_url: "This was so helpful!", website_url: "google.com", topic_id: topic2.id)
resource3 = Resource.create(video_url: "This was so helpful!", website_url: "google.com", topic_id: topic3.id)

puts "seeding notes..."
note1 = Note.create(
    title: "silent e",
    content: "The silent e hides behind a consonant and scares a vowel to say its own name!",
    resource_id: resource1.id)
note2 = Note.create(
    title: "text evidence",
    content: "Strong writers always prove their ideas with text evidence.",
    resource_id: resource2.id)
note3 = Note.create(
    title: "main idea",
    content: "Great readers always think about what the text is teaching us while reading. Then they jot the main idea at the end of the text.",
    resource_id: resource3.id)


puts "Done seeding!"