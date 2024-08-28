import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const loginUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "User logged in successfully"));
});

export { loginUser };
