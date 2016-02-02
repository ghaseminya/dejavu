var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var FeatureComponent = require('../featureComponent.jsx');
var Dropdown = require('./dropdown.jsx');

var Info = React.createClass({
    render: function() {
        var infoObj = this.props.infoObj;
        var filterInfo = this.props.filterInfo;
        var sortInfo = this.props.sortInfo;
        var actionOnRecord = this.props.actionOnRecord;
        var filterClass = filterInfo.active ? 'pull-right text-right pd-r10' : 'hide';
        var sortClass = sortInfo.active ? 'pull-right text-right pd-r10' : 'hide';
        var infoObjClass = infoObj.total == 0 ? "hide" : "pull-left text-left pd-l0 recordTotalRow";
        var sortAscClass = sortInfo.active && sortInfo.reverse ? 'fa fa-sort-alpha-desc' : 'fa fa-sort-alpha-asc';
        var totalClass = actionOnRecord.active ? 'hide' : 'col-xs-12';
        var selectionClass = actionOnRecord.active ? 'col-xs-12' : 'hide';

        var UpdateDocument = actionOnRecord.selectedRows.length == 1 ? <FeatureComponent.UpdateDocument actionOnRecord={actionOnRecord}/> : '';

        return (<div className="infoRow container">
                    <div className=" row">
                        <div className={infoObjClass}>
                            <div className={totalClass}>
                                <span className="info_single">
                                    <label>Showing
                                        <strong>{infoObj.showing}</strong>of total
                                        <strong>&nbsp;{infoObj.total}</strong>
                                    </label>
                                </span>
                            </div>
                            <div className={selectionClass}>
                                <span className="pull-left pd-r10 info_single">
                                    <strong>{ actionOnRecord.selectedRows.length}</strong>selected of total
                                    <strong>{infoObj.total}</strong>
                                </span>
                                <span className="pull-left">{UpdateDocument}
                                    <FeatureComponent.DeleteDocument
                                                actionOnRecord={actionOnRecord}/>
                                    <a href="javascript:void(0);" className="info_single" onClick={actionOnRecord.removeSelection}>Remove Selection</a>
                                </span>
                            </div>
                        </div>
                        <div className="pull-right pd-r0">
                            <Dropdown
                                        visibleColumns ={this.props.visibleColumns}
                                        columnToggle ={this.props.columnToggle}
                                         cols={this.props.columns} />
                            <FeatureComponent.AddDocument
                                            types={this.props.types}
                                            addRecord ={this.props.addRecord}
                                            getTypeDoc={this.props.getTypeDoc}
                                            selectClass="tags-select-small" />
                            <div className={filterClass}>
                                <a href="javascript:void(0)" className="removeFilter">
                                    <span className="inside-info">{filterInfo.method}:&nbsp;{filterInfo.columnName}</span>
                                    <span className="close-btn" onClick={this.props.removeFilter}>
                                        <i className="fa fa-times"></i>
                                    </span>
                                </a>
                            </div>
                            <div className={sortClass}>
                                <a href="javascript:void(0)" className="removeFilter">
                                    <span className="inside-info">
                                        <i className={sortAscClass}></i>{sortInfo.column}
                                    </span>
                                    <span className="close-btn" onClick={this.props.removeSort}>
                                        <i className="fa fa-times"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>)
    }
});

module.exports = Info;