# Data Sources

This document provides detailed information about the data sources used in the Find Your Vote NJ application.

## Geographic Data

### Congressional District Boundaries
- **File**: `NJCD_2021_ADOPTED_DEC22.json`
- **Description**: GeoJSON file containing the official congressional district boundaries for New Jersey
- **Source**: https://www.njredistrictingcommission.org/adoption2022map.asp
- **Last Updated**: 2022
- **Format**: GeoJSON
- **Key Properties**:
    - DISTRICT: Congressional district number
   

### State Boundary
- **File**: `State_Boundary_of_NJ,3424.json`
- **Description**: GeoJSON file containing the state boundary of New Jersey
- **Source**: https://njogis-newjersey.opendata.arcgis.com/datasets/state-boundary-of-nj-3424/explore
- **Format**: GeoJSON

## Electoral Data

### District Information
Currently using placeholder data for:
- District population
- Last update dates

### Candidate Information
Currently using placeholder data for:
- Candidate names
- Party affiliations
- Incumbent status

### Election Information
Currently using placeholder data for:
- Election dates
- Registration deadlines
- Early voting periods

## Future Data Integration
Planning to integrate:
- Real-time election results
- Historical election data
- Demographic information
- Voting location data

## Data Update Schedule
- Geographic data: Updated following redistricting
- Candidate information: Before next election
- Election information:  Before next election

## Notes
- All placeholder data will be replaced with official data from state government and official campaign sources
- Geographic data is rendered using React-Leaflet
- Data processing and transformation scripts will be added to the repository