class User < ApplicationRecord
  include Discard::Model
  
  extend FriendlyId
  friendly_id :name, use: :slugged

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :projects, dependent: :destroy

  def name
      "#{first_name} #{last_name }".strip
  end

  def active_for_authentication?
    super && !discarded?
  end
end
