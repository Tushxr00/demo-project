const BASE_URL = "https://jobs-api.squareboat.info/api/v1/";
const LOGIN = BASE_URL + "auth/login";
const GET_POSTED_JOBS = (pageNo) => BASE_URL + `recruiters/jobs?page=${pageNo}`;
const GET_ONE_JOB_CANDIDATES = (jobId) =>
  BASE_URL + `recruiters/jobs/${jobId}/candidates`;

const GET_REQUEST = (token) => {
  return {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `${token}`,
    },
  };
};

const POST_REQUEST = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
};

const apiCall = async (requestURL, requestResource) => {
  const response = await fetch(requestURL, requestResource);
  const data = await response.json();
  return data;
};

const login = async (loginData) => {
  try {
    const response = await apiCall(LOGIN, POST_REQUEST(loginData));
    if (response.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
    } else {
      alert("response error: " + response.message);
    }
    return response;
  } catch (err) {
    console.log({ err });
    alert("response error: " + err.message);
  }
};

const getPostedJobs = async (pageNo = 1) => {
  try {
    const token = localStorage.getItem("token");
    const response = await apiCall(GET_POSTED_JOBS(pageNo), GET_REQUEST(token));
    return response;
  } catch (err) {
    console.log({ err });
    alert("response error: " + err.message);
  }
};

const getOneJobCandidates = async (jobId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await apiCall(
      GET_ONE_JOB_CANDIDATES(jobId),
      GET_REQUEST(token)
    );
    return response;
  } catch (err) {
    console.log({ err });
    alert("response error: " + err.message);
  }
};

export { login, getPostedJobs, getOneJobCandidates };
