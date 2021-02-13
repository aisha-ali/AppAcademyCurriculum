require 'bcrypt'

password_hash = BCrypt:: Password.create('my_secret_password')
password_hash.is_password ? ('my_secret_password')
password_hash.is_password ? ('not_my_secret_password')


class User < ApplicationRecord
  def password = (password)
    self.password_digest = BCrypt:: Password.create(password)
  end
end


class User < ApplicationRecord
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end