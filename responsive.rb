require 'sinatra'
require 'mongoid'
require 'roar/representer/json'

require_relative "lib/database/element.rb"

Dir["lib/database/**/*.rb"].reverse.each { |file| require_relative file }
Dir["lib/representers/**/*.rb"].each { |file| require_relative file }

require_relative "config/initialize"
require_relative "lib/application"
