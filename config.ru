require 'rubygems'
require 'bundler'
Bundler.setup(:default, :production)

require 'toto'

require 'dalli'
require 'rack/cache'

$cache = Dalli::Client.new
use Rack::Cache, :metastore => $cache, :entitystore => $cache
use Rack::Static, :urls => ['/css', '/js', '/images', '/favicon.ico'], :root => 'public'
use Rack::CommonLogger

if ENV['RACK_ENV'] == 'development'
  use Rack::ShowExceptions
end

# borrowed from cloudhead/cloudhead.io
class Toto::Site
  def writings *args
    index *args
  end
end

#
# Create and configure a toto instance
#
toto = Toto::Server.new do
  #
  # Add your settings here
  # set [:setting], [value]
  #
  set :author,    'Jonathan Dance'
  set :title,     'wuputah ~ Jonathan Dance'
  set :date,      lambda { |now|
                    "<abbr title=\"#{now.strftime("#{now.day} %B %Y")}\"> stardate #{now.strftime("%y")}" +
                    sprintf("%05.1f", 1000.0 * now.strftime('%j').to_f / Date.new(now.year, 12, 31).strftime('%j').to_f) +
                    "</abbr>"
                  }
  set :url,       'http://wuputah.com'
  set :root,      "home"
  set :disqus,    'wuputah'
  # set :markdown,  :smart                                    # use markdown + smart-mode
  # set :summary,   :max => 150, :delim => /~/                # length of article summary and delimiter
  set :ext,       'markdown'                                  # file extension for articles
  # set :cache,      28800                                    # cache duration, in seconds
end

run toto
