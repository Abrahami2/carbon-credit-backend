import express from 'express';

import AddNewTrip from '../controllers/trip/add-trip';
import GetAllTrips from '../controllers/trip/get-trips';

import SchemaValidator from '../middlewares/schema-validator';

import { API_ENDPOINTS, USER_STATUS } from './utils/constants';
import { CatchResponse, SuccessResponse } from './utils/helpers';

const validateRequest = SchemaValidator(true);


const router = express.Router();
        
router.post(
  API_ENDPOINTS.TRIPS.ADD_TRIP,
  validateRequest,
  async (req, res) => {
    try {
      const {
        body: {
          userId,
          date,
          mode,
          distance,
          credits,
          proof
        }
      } = req;

      const trips = await AddNewTrip({
        userId,
        date,
        mode,
        distance,
        credits,
        proof
      });

      SuccessResponse({
        res,
        trips
      });
    } catch (err) {
      CatchResponse({
        res,
        err
      });
    }
  }
);

router.post(
  API_ENDPOINTS.TRIPS.GET_TRIPS,
  validateRequest,
  async (req, res) => {
    try {
      const {
        body: {
          userId,
          isRecent
        }
      } = req;

      const trips = await GetAllTrips({
        userId,
        isRecent
      });

      SuccessResponse({
        res,
        trips
      });
    } catch (err) {
      CatchResponse({
        res,
        err
      });
    }
  }
);

export default router;
