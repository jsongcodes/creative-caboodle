class OpenaiPrompt
    extend Dry::Initializer
  
    URL = "https://api.openai.com/v1/completions"
  
    param :prompt
  
    option :model, default: proc { "text-davinci-003" }
    option :max_tokens, default: proc { 1000 }
    option :temperature, default: proc { 0 }
  
    def call
      connection =
        Faraday.new do |faraday|
          faraday.ssl[:verify] = false
          faraday.headers = headers
        end
      response = connection.post(URL, body)
      json = JSON.parse(response.body)
      json["choices"].first["text"]
    end
  
    private
  
    def body
      {
        model: model,
        prompt: prompt,
        max_tokens: max_tokens,
        temperature: temperature
      }.to_json
    end
  
    def headers
      {
        "Content-Type" => "application/json",
        "Authorization" => "Bearer #{ENV['OPENAI_ACCESS_TOKEN']}",
        "OpenAI-Organization" => ENV['OPENAI_ORGANIZATION_ID']
      }
    end
  end