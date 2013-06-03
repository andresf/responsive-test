class Application < Sinatra::Application

  get '/' do
    erb :index
  end

  get '/data' do
    content_type :json
    Page.first.extend(Representers::Page).to_json
  end

end
