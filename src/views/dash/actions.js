import axios from 'axios'

export const getOpportunities = username => {
  return async dispatch => {
   dispatch(setLoadingOppsState()); // Show a loading spinner
   const response = await axios(`http://localhost:5000/jobhuntr/opportunities?username=${username}`)
   dispatch(doneFetchingOpps()); // Hide loading spinner
   if (response.status === 200){
     dispatch(setOpps(response.data)); // Use a normal function to set the received state
   } else { 
     dispatch(getOppsErr(response.statusText))
   }
 }
}

/**
 * set loading state so we can add spinners
 */
const setLoadingOppsState = () => ({ type: "FETCHING_OPPS" })

/**
 * set loading state to false so we can remove spinner
 */
const doneFetchingOpps = () => ({ type: "DONE_FETCHING_OPPS" })

/**
 * set redux state to the result of getting all opportunities
 * @param {Array} data - an arr of objects to set as opportunities
 */
const setOpps = data => ({ type: "SET_OPPS", data })

/**
 * set AJAX error if something went wrong with trying to get the opportunities
 * @param {String} text 
 */
const getOppsErr = text => ({ type: "ERROR", text })
