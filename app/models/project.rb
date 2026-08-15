class Project < ApplicationRecord
    include Discard::Model
    
    extend FriendlyId
    friendly_id :name, use: :slugged

    before_save :sanitize_description

    belongs_to :user
    
    validates :name, presence: true
    validates :description, presence: true

    private

    def sanitize_description
        self.description = ActionController::Base.helpers.sanitize(
        description,
        tags: %w[a blockquote br em h1 h2 h3 img li ol p s strong u ul],
        attributes: %w[href src]
        )
    end

end
