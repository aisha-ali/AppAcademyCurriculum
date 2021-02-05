class User < ApplicationRecord
  // ...
  def includes_post_comment_counts
    // `includes` *prefetches the association* `comments`, so it doesn't need to be queried for later.
    posts.each do |post|
      post_comment_counts[post] = post.comments.length
    end

    post_comment_counts
  end
end
