module.exports = {
  STATUS_CODE: {
    CREATED: 201,
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    GONE: 410,
    INTERNAL_SERVER_ERROR: 500,
  },

  ERROR_MESSAGES: {
    // User-related messages
    USER_NOT_FOUND: 'User not found',
    USER_ALREADY_EXISTS: 'User already exists',
    INCORRECT_PASSWORD: 'Incorrect password',
    INCORRECT_EMAIL_OR_PASSWORD: 'Incorrect email or password',
    INVALID_TOKEN: 'Invalid token',
    MAX_ATTEMPTS_EXCEEDED: 'Too many login attempts. Please try again later.',
    EMAIL_ALREADY_EXISTS: 'Email already exists',
    EMAIL_ALREADY_VERIFIED: 'Email already verified',
    INVALID_EMAIL_FORMAT: 'Invalid email format',
    INVALID_IMAGE_FORMAT: 'Invalid image format',
    PASSWORD_REQUIRED: 'Password is required',
    PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters long',
    PASSWORD_PATTERN_INVALID: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
    INCORRECT_OLD_PASSWORD: 'Old password is incorrect',
    CONFIRM_PASSWORD_MISMATCH: 'Passwords do not match',
    EMAIL_REQUIRED: 'Email is required',
    EMAIL_INVALID: 'Email must be a valid email address',
    EMAIL_ALREADY_EXISTS: 'Email already exists',
    OLD_PASSWORD_REQUIRED: 'Old password is required',
    NEW_PASSWORD_REQUIRED: 'New password is required',
    NEW_PASSWORD_MIN_LENGTH: 'New password must be at least 8 characters long',
    NEW_PASSWORD_PATTERN_INVALID: 'New password must include at least one uppercase letter, one lowercase letter, one number, and one special character',


    // Post-related messages
    POST_NOT_FOUND: 'Post not found',
    POST_CREATION_FAILED: 'Failed to create post. Please try again.',
    POST_UPDATE_FAILED: 'Failed to update post. Please try again.',
    POST_DELETION_FAILED: 'Failed to delete post. Please try again.',
    POST_ID_REQUIRED: 'Post ID is required',
    

    // Comment-related messages
    COMMENT_NOT_FOUND: 'Comment not found',
    COMMENT_CREATION_FAILED: 'Failed to create comment. Please try again.',
    COMMENT_UPDATE_FAILED: 'Failed to update comment. Please try again.',
    COMMENT_DELETION_FAILED: 'Failed to delete comment. Please try again.',
    COMMENT_ID_REQUIRED: 'Comment ID is required',
    INVALID_PARENT_COMMENT_ID: 'Parent comment not found',

    // General validation messages
    CONTENT_REQUIRED: 'Content is required',
    CONTENT_STRING_REQUIRED: 'Content must be a string',
    CONTENT_CANNOT_BE_EMPTY: 'Content cannot be empty',
    TITLE_REQUIRED: 'Title is required',
    READ_TIME_INVALID: 'Read time must be a positive integer',
    IMAGE_BASE64_INVALID: 'Image must be a valid base64 string',
    THUMBNAIL_BASE64_INVALID: 'Thumbnail must be a valid base64 string',
    CATEGORY_ID_INVALID: 'Category ID must be a positive integer between 1 and 10',
    PARENT_ID_INVALID: 'Parent ID must be a positive number',
    
    // User field validation
    FIRST_NAME_REQUIRED: 'First name is required',
    FIRST_NAME_MIN_LENGTH: 'First name must be at least 1 character long',
    FIRST_NAME_MAX_LENGTH: 'First name must be less than 256 characters long',
    LAST_NAME_REQUIRED: 'Last name is required',
    LAST_NAME_MIN_LENGTH: 'Last name must be at least 1 character long',
    LAST_NAME_MAX_LENGTH: 'Last name must be less than 256 characters long',
    
    // Generic errors
    INTERNAL_SERVER_ERROR: 'An internal server error occurred',
    FORBIDDEN: 'You don\'t have permission to perform this action',
  },

  SUCCESS_MESSAGES: {
    // User-related messages
    USER_CREATED: 'User created successfully',
    USER_LOGGED_IN: 'User logged in successfully',
    PASSWORD_RESET_EMAIL_SENT: 'Password reset email sent successfully',
    PASSWORD_RESET_SUCCESS: 'Password reset successfully',
    EMAIL_VERIFIED: 'Email verified successfully',
    USER_UPDATED: 'User updated successfully',
    USER_DELETED: 'User deleted successfully',
    USER_FETCHED: 'Users fetched successfully',
    PASSWORD_CHANGED: 'Password changed successfully',
    

    // Post-related messages
    POST_CREATED: 'Post created successfully',
    POSTS_RETRIEVED: 'Posts retrieved successfully',
    POST_RETRIEVED: 'Post retrieved successfully',
    POST_UPDATED: 'Post updated successfully',
    POST_DELETED: 'Post deleted successfully',

    // Comment-related messages
    COMMENT_CREATED: 'Comment created successfully',
    COMMENTS_RETRIEVED: 'Comments retrieved successfully',
    COMMENT_UPDATED: 'Comment updated successfully',
    COMMENT_DELETED: 'Comment deleted successfully',
    REPLIES_RETRIEVED: 'Replies retrieved successfully',
  },

  PASSWORD_PATTERN: {
    REGEXP: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  },
};
